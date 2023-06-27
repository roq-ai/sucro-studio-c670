import { UserInterface } from 'interfaces/user';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  end_customer_id?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  startup?: StartupInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  end_customer_id?: string;
  startup_id?: string;
}
