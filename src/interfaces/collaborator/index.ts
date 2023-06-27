import { UserInterface } from 'interfaces/user';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface CollaboratorInterface {
  id?: string;
  user_id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  startup?: StartupInterface;
  _count?: {};
}

export interface CollaboratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  startup_id?: string;
}
