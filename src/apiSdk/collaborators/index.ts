import axios from 'axios';
import queryString from 'query-string';
import { CollaboratorInterface, CollaboratorGetQueryInterface } from 'interfaces/collaborator';
import { GetQueryInterface } from '../../interfaces';

export const getCollaborators = async (query?: CollaboratorGetQueryInterface) => {
  const response = await axios.get(`/api/collaborators${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCollaborator = async (collaborator: CollaboratorInterface) => {
  const response = await axios.post('/api/collaborators', collaborator);
  return response.data;
};

export const updateCollaboratorById = async (id: string, collaborator: CollaboratorInterface) => {
  const response = await axios.put(`/api/collaborators/${id}`, collaborator);
  return response.data;
};

export const getCollaboratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/collaborators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCollaboratorById = async (id: string) => {
  const response = await axios.delete(`/api/collaborators/${id}`);
  return response.data;
};
