export interface BrokerInfo {
  name: string;
  stats: {
    deals: number;
    approvalRate: string;
    pending: string;
  };
}
