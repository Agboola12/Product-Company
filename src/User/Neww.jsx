import React from 'react'

const Neww = () => {
  return (
    <div>
        
        <div>
    <div class="faq-section bg-light py-5" id="faq">
      <div class="container">
        <h2 class="text-bold text-center mb-5">Frequently Asked Questions</h2>
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="accordion accordion-faq" id="accordionfaq">
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="headingOneFaq">
                  <button class="accordion-button text-normal bg-transparent" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOneFaq" aria-expanded="true" aria-controls="collapseOneFaq">
                    <div class="d-flex align-items-lg-center align-items-start">
                      <h6 class="make-text-medium mb-0">How secure is the voting system?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseOneFaq" class="accordion-collapse collapse show" aria-labelledby="headingOneFaq"
                  data-bs-parent="#accordionfaq">
                  <div class="accordion-body">
                    <div class="text-light-grey">Our voting system employs robust security measures, including encryption and authentication protocols, to ensure the utmost security and protection of voter information and the integrity of the voting process.</div>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="headingTwoFaq">
                  <button class="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwoFaq" aria-expanded="false"
                    aria-controls="collapseTwoFaq">
                    <div class="d-flex align-items-lg-center align-items-start">
                      <h6 class="make-text-medium mb-0">Can participants change their votes?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseTwoFaq" class="accordion-collapse collapse" aria-labelledby="headingTwoFaq"
                  data-bs-parent="#accordionfaq">
                  <div class="accordion-body">
                    <div class="text-light-grey">Once a vote is cast, participants typically cannot change their votes to maintain the integrity and fairness of the voting process.</div>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="headingThreeFaq">
                  <button class="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThreeFaq" aria-expanded="false"
                    aria-controls="collapseThreeFaq">
                    <div class="d-flex align-items-lg-center align-items-start">
                      <h6 class="make-text-medium mb-0">How are the results calculated and displayed?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseThreeFaq" class="accordion-collapse collapse" aria-labelledby="headingThreeFaq"
                  data-bs-parent="#accordionfaq">
                  <div class="accordion-body">
                    <div class="text-light-grey">The voting system calculates the results based on the chosen voting method (e.g., majority, ranked-choice, etc.) and displays them in a clear and concise format, often providing real-time updates for immediate access.</div>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="headingFourFaq">
                  <button class="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFourFaq" aria-expanded="false"
                    aria-controls="collapseFourFaq">
                    <div class="d-flex align-items-lg-center align-items-start">
                      <h6 class="make-text-medium mb-0">Is there a way to export or download the voting results?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseFourFaq" class="accordion-collapse collapse" aria-labelledby="headingFourFaq"
                  data-bs-parent="#accordionfaq">
                  <div class="accordion-body">
                    <div class="text-light-grey">Yes, our voting system usually offers the functionality to export or download the voting results in various formats (e.g., CSV, PDF), allowing you to analyze and store the data as needed.</div>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-3">
                <h2 class="accordion-header" id="headingFiveFaq">
                  <button class="accordion-button text-normal bg-transparent collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFiveFaq" aria-expanded="false"
                    aria-controls="collapseFiveFaq">
                    <div class="d-flex align-items-lg-center align-items-start">
                      <h6 class="make-text-medium mb-0">Is voter anonymity guaranteed?</h6>
                    </div>
                  </button>
                </h2>
                <div id="collapseFiveFaq" class="accordion-collapse collapse" aria-labelledby="headingFiveFaq"
                  data-bs-parent="#accordionfaq">
                  <div class="accordion-body">
                    <div class="text-light-grey">Yes, our voting system ensures voter anonymity, protecting the privacy of participants by separating their personal information from their cast votes, thus upholding the confidentiality and integrity of the voting process.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Neww