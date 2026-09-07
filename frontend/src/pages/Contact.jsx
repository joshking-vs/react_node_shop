function Contact() {
    return (
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-5">
            <div class="card border-0 shadow-sm p-4 bg-dark text-white rounded-mhenik h-100">
              <h3 class="fw-bold text-info mb-4">Connect Directly</h3>
              <p class="text-light-50 mb-4">Have bulk inventory sourcing requirements or complex mechanical system specs? Contact our logistics office.</p>
              
              <div class="d-flex flex-column gap-3 fs-6">
                <div>📍 <strong>Location:</strong> Nairobi, Kenya</div>
                <div>📞 <strong>Phone:</strong> +254 716 687687</div>
                <div>✉️ <strong>Email:</strong> mhenikt@gmail.com</div>
                <div>⏱️ <strong>Hours:</strong> Mon - Sat | 8:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
          
          <div class="col-md-7">
            <div class="card border-0 shadow-sm p-4 bg-white rounded-mhenik h-100">
              <h3 class="fw-bold text-dark mb-3">Submit Part Inquiry</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div class="mb-3">
                  <label class="form-label small fw-bold text-muted">Your Name</label>
                  <input type="text" class="form-control rounded-mhenik" placeholder="Name" required />
                </div>
                <div class="mb-3">
                  <label class="form-label small fw-bold text-muted">Phone Number (WhatsApp Ready)</label>
                  <input type="tel" class="form-control rounded-mhenik" placeholder="+254 7XX XXX XXX" required />
                </div>
                <div class="mb-3">
                  <label class="form-label small fw-bold text-muted">Part Requirements / SKU details</label>
                  <textarea class="form-control rounded-mhenik" rows="4" placeholder="List the component names or specific vehicle models you are maintaining..." required></textarea>
                </div>
                <button type="submit" class="btn btn-primary rounded-mhenik fw-bold px-4">Send Verification Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;