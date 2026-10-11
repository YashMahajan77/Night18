import { useState } from "react"
import { ArrowLeft, ArrowRight, Check, MapPin, MessageCircle, Phone, ShieldCheck, UserRound } from "lucide-react"

const WHATSAPP_NUMBER = "917620183105"
const DISPLAY_NUMBER = "7620183105"

function OrderPage({ cart, subtotal, delivery, goTo }) {
  const [customerName, setCustomerName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [deliveryNote, setDeliveryNote] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [prepared, setPrepared] = useState(false)
  const payable = subtotal + delivery

  const validateCustomer = () => {
    const cleanMobile = mobileNumber.replace(/\D/g, "")
    if (!customerName.trim()) {
      setFormMessage("Please enter your name.")
      return false
    }
    if (cleanMobile.length < 10) {
      setFormMessage("Please enter a valid 10-digit mobile number.")
      return false
    }
    setFormMessage("")
    return true
  }

  const orderMessage = () => [
    "Hi Night18 👋",
    "I would like to place an order.",
    "",
    "*Customer details*",
    `Name: ${customerName.trim()}`,
    `Mobile: ${mobileNumber}`,
    `Area / landmark: ${deliveryNote.trim() || "I will share my live location here"}`,
    "",
    "*My order*",
    ...cart.map((item) => `• ${item.quantity} × ${item.name} — ₹${item.price * item.quantity}`),
    "",
    `Item total: ₹${subtotal}`,
    `Delivery: ${delivery === 0 ? "FREE" : `₹${delivery}`}`,
    `Estimated total: ₹${payable}`,
    "",
    "Please confirm item availability and the final total.",
    "After confirmation, please share the payment details. I will complete the payment and send the screenshot here.",
    "I will also share my live location in this WhatsApp chat for delivery.",
    "",
    "Thank you — excited to try Night18! 🌙",
  ].join("\n")

  const openWhatsApp = (message = orderMessage()) => {
    if (!validateCustomer()) return
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  const prepareOrder = (event) => {
    event.preventDefault()
    if (validateCustomer()) setPrepared(true)
  }

  if (prepared) return <main className="page-main payment-page"><div className="payment-success"><div className="success-icon"><Check size={34} /></div><div className="eyebrow"><span /> Ready for WhatsApp</div><h1>One more<br /><em>message.</em></h1><p>Your order summary is ready. Send it to Night18 so we can call you, confirm the order and share payment instructions.</p><div className="success-detail"><span>{customerName} · {mobileNumber}</span><b>₹{payable}</b><small>Estimated total · Final total is confirmed on WhatsApp</small></div><div className="order-process"><div><b>01</b><span>Send the summary</span></div><div><b>02</b><span>We call to confirm</span></div><div><b>03</b><span>Pay directly, then share live location</span></div></div><div className="success-actions"><button className="whatsapp-button success-whatsapp" onClick={() => openWhatsApp()}><MessageCircle size={18} /> Send order on WhatsApp</button><a className="call-button" href={`tel:${DISPLAY_NUMBER}`}><Phone size={17} /> Call {DISPLAY_NUMBER}</a></div><button className="text-button" onClick={() => setPrepared(false)}>Edit details</button></div></main>

  return <main className="page-main payment-page order-page"><div className="payment-head"><button className="back-button" onClick={() => goTo("cart")}><ArrowLeft size={17} /> Back to cart</button><div className="secure-label"><ShieldCheck size={15} /> Direct WhatsApp order</div></div><form className="payment-layout" onSubmit={prepareOrder}><section className="payment-form"><div className="partner-logo"><span className="partner-logo-mark">18</span><span><b>NIGHT18</b><small>ORDER DESK · HOME-STYLE KITCHEN</small></span></div><div className="payment-title"><div className="eyebrow"><span /> Simple &amp; personal</div><h1>Order on<br /><em>WhatsApp.</em></h1><p>We are a small home-style kitchen, so every order is confirmed personally. No payment gateway and no card details on this website.</p></div><div className="customer-fields"><label className="field-label"><UserRound size={14} /> Full name<input value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Your name" autoComplete="name" required /></label><label className="field-label"><Phone size={14} /> Mobile number<input value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value.replace(/[^0-9+ ]/g, ""))} placeholder="98765 43210" inputMode="tel" autoComplete="tel" required /></label></div><label className="field-label"><MapPin size={14} /> Area / landmark <span className="optional-label">optional</span><input value={deliveryNote} onChange={(event) => setDeliveryNote(event.target.value)} placeholder="e.g. DY Patil hostel gate" /></label><div className="direct-payment-card"><div className="direct-payment-icon"><MessageCircle size={20} /></div><div><b>Payment is completed directly with Night18</b><p>First send your order. We call to confirm availability and the final amount. Then pay using the UPI details shared in this WhatsApp chat and send your payment screenshot.</p></div></div><div className="delivery-note"><MapPin size={16} /><span><b>Limited delivery area</b><small>DY Patil / PCCOE and nearby locations within 3.5 km · Share live location in WhatsApp</small></span></div>{formMessage && <p className="form-error">{formMessage}</p>}<div className="order-actions"><button className="primary-button full pay-button" type="submit">Prepare WhatsApp summary <ArrowRight size={18} /></button><button className="whatsapp-button full" type="button" onClick={() => openWhatsApp()}><MessageCircle size={18} /> Send directly now</button></div><small className="static-note">Your browser only prepares the message. Night18 confirms every order personally before cooking.</small></section><aside className="payment-summary"><h3>Order summary</h3><div className="customer-summary"><span>Customer</span><b>{customerName || "Your name"}</b><small>{mobileNumber || "Mobile number"}</small></div><div className="payment-items">{cart.map((item) => <div key={item.id}><span>{item.quantity} × {item.name}</span><b>₹{item.price * item.quantity}</b></div>)}</div><div className="payment-totals"><div><span>Item total</span><b>₹{subtotal}</b></div><div><span>Delivery fee</span><b>{delivery === 0 ? "FREE" : `₹${delivery}`}</b></div><div className="payment-total"><span>Estimated total</span><b>₹{payable}</b></div></div><small className="payment-trust"><ShieldCheck size={14} /> No card details are collected here</small></aside></form></main>
}

export default OrderPage
