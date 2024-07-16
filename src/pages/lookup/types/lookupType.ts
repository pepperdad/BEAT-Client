export interface LookupProps {
  userId: number;
  bookingId: number;
  scheduleId: number;
  performanceTitle: string;
  performanceVenue: string;
  performanceDate: string;
  posterImage: string;
  purchaseTicketCount: number;
  scheduleNumber: string;
  bookerName: string;
  bookerPhoneNumber: string;
  bankName: string;
  accountNumber: string;
  dueDate: number;
  paymentStatus: boolean;
  createdAt: string;
  price: number;
  handleBtn?: () => void;
  handleAccount?: () => void;
}
