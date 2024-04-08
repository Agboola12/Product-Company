import React, { useState } from 'react';

function FAQSection() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? '' : accordionId);
  };

  return (
    <div className="faq-section bg-light py-5" id="faq">
      <div className="container">
        <h2 className="text-bold text-center mb-5">Frequently Asked Questions</h2>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="accordion accordion-faq" id="accordionfaq">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingOneFaq">
                  <button
                    className={`accordion-button text-normal bg-transparent ${activeAccordion === 'collapseOneFaq' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseOneFaq')}
                    aria-expanded={activeAccordion === 'collapseOneFaq'}
                    aria-controls="collapseOneFaq"
                  >
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">Who is a candidate for penis enlargement and enhancement?</h6>
                    </div>
                  </button>
                </h2>
                <div
                  id="collapseOneFaq"
                  className={`accordion-collapse collapse ${activeAccordion === 'collapseOneFaq' ? 'show' : ''}`}
                  aria-labelledby="headingOneFaq"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">
                    <div className="text-light-grey">
                      If you’re feeling dissatisfied about the look and size of your penis, then this procedure may help you feel more confident.
                      We understand that feeling confident and satisfied with your body is important, and we’re here to help you. Before you begin,
                      it’s important to have a realistic view of your current size and expectations for enhancement. During your private consultation, our expert physician will discuss your concerns and provide detailed information about the risks and benefits of the procedure.
                      We believe that each person is unique and we will conduct a physical exam to determine your individual needs and options.
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingTwoFaq">
                  <button
                    className={`accordion-button text-normal bg-transparent ${activeAccordion === 'collapseTwoFaq' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseTwoFaq')}
                    aria-expanded={activeAccordion === 'collapseTwoFaq'}
                    aria-controls="collapseTwoFaq"
                  >
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">Do I have to be circumcised to get penile augmentation treatment?</h6>
                    </div>
                  </button>
                </h2>
                <div
                  id="collapseTwoFaq"
                  className={`accordion-collapse collapse ${activeAccordion === 'collapseTwoFaq' ? 'show' : ''}`}
                  aria-labelledby="headingTwoFaq"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">
                    <div className="text-light-grey">
                      <p>No, there is no requirement for you to be circumcised. We provide treatments for men who are both circumcised and non-circumcised.
                        We recommend scheduling a confidential consultation with our experienced male enhancement specialists to assess the most appropriate
                        treatment option and discuss expected results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="headingThreeFaq">
                  <button
                    className={`accordion-button text-normal bg-transparent ${activeAccordion === 'collapseThreeFaq' ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion('collapseThreeFaq')}
                    aria-expanded={activeAccordion === 'collapseThreeFaq'}
                    aria-controls="collapseThreeFaq"
                  >
                    <div className="d-flex align-items-lg-center align-items-start">
                      <h6 className="make-text-medium mb-0">How long will the procedure take?</h6>
                    </div>
                  </button>
                </h2>
                <div
                  id="collapseThreeFaq"
                  className={`accordion-collapse collapse ${activeAccordion === 'collapseThreeFaq' ? 'show' : ''}`}
                  aria-labelledby="headingThreeFaq"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">
                    <div className="text-light-grey">
                      <p>The procedure typically takes around 30 minutes to complete, although this can vary depending on the individual’s needs and goals.
                        Following the procedure, the patient can resume their regular activities without any significant downtime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
