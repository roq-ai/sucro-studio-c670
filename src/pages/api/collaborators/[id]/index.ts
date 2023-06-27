import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { collaboratorValidationSchema } from 'validationSchema/collaborators';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.collaborator
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCollaboratorById();
    case 'PUT':
      return updateCollaboratorById();
    case 'DELETE':
      return deleteCollaboratorById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCollaboratorById() {
    const data = await prisma.collaborator.findFirst(convertQueryToPrismaUtil(req.query, 'collaborator'));
    return res.status(200).json(data);
  }

  async function updateCollaboratorById() {
    await collaboratorValidationSchema.validate(req.body);
    const data = await prisma.collaborator.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCollaboratorById() {
    const data = await prisma.collaborator.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
