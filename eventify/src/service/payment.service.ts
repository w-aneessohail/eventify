import { Repository } from "typeorm";
import { Payment } from "../entity/payment.entity";

export class PaymentService {
  constructor(private paymentRepository: Repository<Payment>) {}

  async getAllPayments(): Promise<Payment[]> {
    return this.paymentRepository.find({
      relations: ["booking"],
    });
  }

  async getPaymentById(id: number): Promise<Payment | null> {
    return this.paymentRepository.findOne({
      where: { id },
      relations: ["booking"],
    });
  }

  async createPayment(paymentData: Partial<Payment>): Promise<Payment> {
    const payment = this.paymentRepository.create(paymentData);
    return this.paymentRepository.save(payment);
  }

  async updatePayment(
    id: number,
    paymentData: Partial<Payment>
  ): Promise<Payment | null> {
    const payment = await this.paymentRepository.findOne({ where: { id } });
    if (!payment) return null;

    this.paymentRepository.merge(payment, paymentData);
    await this.paymentRepository.save(payment);
    return this.getPaymentById(id);
  }

  async deletePayment(id: number): Promise<boolean> {
    const result = await this.paymentRepository.delete({ id });
    return result.affected !== 0;
  }
}
