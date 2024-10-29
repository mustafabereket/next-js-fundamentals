import EditInvoiceForm from "../../../../ui/invoices/edit-form";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";

export default async function EditInvoice({ params }) {
  const customers = await fetchCustomers();

  const { id } = await params;

  const invoice = await fetchInvoiceById(id || "");

  return <EditInvoiceForm customers={customers} invoice={invoice} />;
}
