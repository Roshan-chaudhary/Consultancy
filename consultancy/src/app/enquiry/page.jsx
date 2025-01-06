import React from "react";

const page = () => {
  return (
    <div>
      <div className="inner_page">
        <div className="visitor_enquiry_form">
          <div id="loader" />
          <form
            action="https://thenext.edu.np/enquiry-submit/"
            method="POST"
            id="form"
          >
            <fieldset>
              <legend>
                <span className="number">1</span>Your Basic Info
              </legend>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="name"
                    name="fullname"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="dob"
                    name="dob"
                    placeholder="DOB"
                    required=""
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="user_passport"
                    name="passport_no"
                    placeholder="Passport No"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">2</span>Academic Qualification
              </legend>
              <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <select
                    id="last_qualification"
                    name="last_qualification"
                    required=""
                  >
                    <option value="">Last Qulaifiation</option>
                    <option value={+2}>+2</option>
                    <option value="PCL">PCL</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="college_name"
                    name="institute_name"
                    placeholder="College Name"
                    required=""
                  />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="percentage"
                    name="score"
                    placeholder="Percentage/CGPA/Grade"
                    required=""
                  />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="date_here"
                    name="passed_year"
                    placeholder="Passed Year"
                    required=""
                  />
                </div>
              </div>
            </fieldset>
            {/*	<div class="col-lg-3 col-md-12 col-sm-12">
<label for="name">Bachelor:</label>
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="college_name" name="college_name" placeholder="College Name">
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="percentage" name="percentage" placeholder="Percentage/CGPA/Grade">
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="date_here" name="date_here" placeholder="dd/mm/yyyy">
</div>
<div class="col-lg-3 col-md-12 col-sm-12">
<label for="name">+2/PCL:</label>
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="college_name" name="college_name" placeholder="College Name">
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="percentage" name="percentage" placeholder="Percentage/CGPA/Grade">
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="date_here" name="date_here" placeholder="dd/mm/yyyy">
</div>
<div class="col-lg-3 col-md-12 col-sm-12">
<label for="name">SLC/SEE:</label>
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="college_name" name="college_name" placeholder="College Name">
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="percentage" name="percentage" placeholder="Percentage/CGPA/Grade">
</div>
<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="date_here" name="date_here" placeholder="dd/mm/yyyy">
</div>*/}
            <fieldset>
              <legend>
                <span className="number">3</span>Additional Info
              </legend>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <select id="marital_status" name="marital_status">
                    <option value="">Marital Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="permanent_address"
                    name="address"
                    placeholder="Address"
                    required=""
                  />
                </div>
                {/*<div class="col-lg-3 col-md-4 col-sm-4">
<input type="text" id="temporary_address" name="temporary_address" placeholder="Temporary Address">
</div>*/}
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="mobile_number"
                    name="mobile_number"
                    placeholder="Mobile No"
                    required=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="user_email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6 col-md-4 col-sm-4">
                  <input
                    type="text"
                    id="parent_guardian_no"
                    name="mobile_number_ii"
                    placeholder="Parent's Guardian No"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="country">
                    Which Country do you want to apply?
                  </label>
                  <select id="country" name="interested_country" required="">
                    <option value="Australia">Dubai</option>
                    <option value="New Zealand">USA</option>
                    <option value="Canada">UK</option>
                    <option value="Uk">Malta</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <label htmlFor="country">Courses you want to study:</label>
                  <select id="country" name="desired_course">
                    <option value="">Desired Course</option>
                    <option value="Architecture,Building and Planning">
                      Architecture,Building and Planning
                    </option>
                    <option value="Art and Design">Art and Design</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Computer Science and IT">
                      Computer Science and IT
                    </option>
                    <option value="Culinary Arts">Culinary Arts</option>
                    <option value="Education and Trainning">
                      Education and Trainning
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Hair,Beauty and Personal Care">
                      Hair,Beauty and Personal Care
                    </option>
                    <option value="Public Health">Public Health</option>
                    <option value="Healthcare and Medicine">
                      Healthcare and Medicine
                    </option>
                    <option value="Social Work">Social Work</option>
                    <option value="Information Science Mathematics">
                      Information Science Mathematics
                    </option>
                    <option value="Land and Environment">
                      Land and Environment
                    </option>
                    <option value="Language Programmes">
                      Language Programmes
                    </option>
                    <option value="Law">Law</option>
                    <option value="Nursing">Nursing</option>
                    <option value="Media/Journalism/Communication">
                      Media/Journalism/Communication
                    </option>
                    <option value="Military Studies">Military Studies</option>
                    <option value="Science and Mathematics">
                      Science and Mathematics
                    </option>
                    <option value="Social Studies and Communication">
                      Social Studies and Communication
                    </option>
                    <option value="Sports">Sports</option>
                    <option value="Travel Tourism and Hospitality">
                      Travel Tourism and Hospitality
                    </option>
                    <option value="Accounting,Marketing,Business">
                      Accounting,Marketing,Business
                    </option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>
                <span className="number">4</span>Your English Language
                Proficiency Score?
              </legend>
              <div className="row">
                <div className="col-lg-12">
                  <label>Have you taken any english proficiency test?</label>
                  <div className="box1">
                    <input
                      type="radio"
                      id="under_13"
                      defaultValue="Yes"
                      name="english_proficiency"
                    />
                    <label htmlFor="under_13" className="light">
                      Yes
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="over_13"
                      defaultValue="No"
                      name="english_proficiency"
                    />
                    <label htmlFor="over_13" className="light">
                      No
                    </label>
                  </div>
                </div>
                <div
                  className="english_proficiency_type"
                  style={{ display: "none" }}
                >
                  <div className="col-lg-2 col-md-12 col-sm-12">
                    <label htmlFor="name">IELTS/PTE:</label>
                    <select id="country" name="english_proficiency_type">
                      <option value="IELTS">IELTS</option>
                      <option value="PTE">PTE</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3">
                    <label htmlFor="name">&nbsp;</label>
                    <input
                      type="text"
                      id="listening"
                      name="listening"
                      placeholder="listening"
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3">
                    <label htmlFor="name">&nbsp;</label>
                    <input
                      type="text"
                      id="reading"
                      name="reading"
                      placeholder="Reading"
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3">
                    <label htmlFor="name">&nbsp;</label>
                    <input
                      type="text"
                      id="writing"
                      name="writing"
                      placeholder="Writing"
                    />
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-3">
                    <label htmlFor="name">&nbsp;</label>
                    <input
                      type="text"
                      id="speaking"
                      name="speaking"
                      placeholder="Speaking"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            {/*<div class="row">
<div class="col-lg-2 col-md-12 col-sm-12">
<label for="name">TOEFL:</label>
</div>
<div class="col-lg-2 col-md-3 col-sm-6">
<input type="text" id="toefl_learning" name="toefl_learning" placeholder="Learning">
</div>
<div class="col-lg-2 col-md-3 col-sm-6">
<input type="text" id="toefl_reading" name="toefl_reading" placeholder="Reading">
</div>
<div class="col-lg-2 col-md-3 col-sm-6">
<input type="text" id="toefl_writing" name="toefl_writing" placeholder="Writing">
</div>
<div class="col-lg-2 col-md-3 col-sm-6">
<input type="text" id="itoefl_speaking" name="toefl_speaking" placeholder="Speaking">
</div>
</div>*/}
            <div className="row">
              {/*<div class="col-lg-2 col-md-12 col-sm-12">
<label for="name">Test Preparation:</label>
<select id="country" name="standardized_test_type">
<option value="">Options</option>
<option value="SAT">SAT</option>
<option value="GRE">GRE</option>
<option value="GMAT">GMAT</option>
<option value="CPA">CPA</option>
</select>
</div> */}
              <div
                className="col-lg-12 is_potential"
                style={{ display: "none" }}
              >
                <label>
                  Are you interested in taking any of the above mentioned tests
                  with us?
                </label>
                <div className="box1">
                  <input
                    type="radio"
                    id="under_13"
                    defaultValue={1}
                    name="is_potential"
                  />
                  <label htmlFor="under_13" className="light">
                    Yes
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="over_13"
                    defaultValue={0}
                    name="is_potential"
                  />
                  <label htmlFor="over_13" className="light">
                    No
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <legend>
                  <span className="number">5</span>Have you chosen any
                  educational institutions?
                </legend>
                <div className="box1">
                  <input
                    type="text"
                    id="desired_university"
                    name="desired_university"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <legend>
                  <span className="number">6</span>How did you get to know about
                  us?
                </legend>
                <div className="box">
                  <label className="light" htmlFor="friends">
                    <input
                      type="checkbox"
                      id="friends"
                      className="radio"
                      defaultValue="friends"
                      name="hear_us"
                    />
                    Friends
                  </label>
                  <br />
                  <label className="light" htmlFor="newspaper">
                    <input
                      type="checkbox"
                      id="newspaper"
                      className="radio"
                      defaultValue="newspaper"
                      name="hear_us"
                    />
                    Newspaper
                  </label>
                  <br />
                  <label className="light" htmlFor="facebook">
                    <input
                      type="checkbox"
                      id="facebook"
                      className="radio"
                      defaultValue="facebook"
                      name="hear_us"
                    />
                    Facebook
                  </label>
                  <br />
                  <label className="light" htmlFor="tv">
                    <input
                      type="checkbox"
                      id="tv"
                      className="radio"
                      defaultValue="tv"
                      name="hear_us"
                    />
                    TV
                  </label>
                  <br />
                  <label className="light" htmlFor="street_board">
                    <input
                      type="checkbox"
                      id="street_board"
                      className="radio"
                      defaultValue="street_board"
                      name="hear_us"
                    />
                    Street Board
                  </label>
                  <br />
                  <label className="light" htmlFor="hoarding_board">
                    <input
                      type="checkbox"
                      id="hoarding_board"
                      className="radio"
                      defaultValue="hoarding_board"
                      name="hear_us"
                    />
                    Hoarding Board
                  </label>
                  <br />
                  <label className="light" htmlFor="fm_radio">
                    <input
                      type="checkbox"
                      id="fm_radio"
                      className="radio"
                      defaultValue="fm_radio"
                      name="hear_us"
                    />
                    FM Radio
                  </label>
                  <br />
                  <label className="light" htmlFor="sms">
                    <input
                      type="checkbox"
                      id="sms"
                      className="radio"
                      defaultValue="sms"
                      name="hear_us"
                    />
                    SMS
                  </label>
                  <br />
                  <label className="light" htmlFor="educational_fair">
                    <input
                      type="checkbox"
                      id="educational_fair"
                      className="radio"
                      defaultValue="educational_fair"
                      name="hear_us"
                    />
                    Educational Fair
                  </label>
                  <br />
                  <label className="light" htmlFor="phone_calls">
                    <input
                      type="checkbox"
                      id="phone_calls"
                      className="radio"
                      defaultValue="phone_calls"
                      name="hear_us"
                    />
                    Phone Calls
                  </label>
                  <br />
                  <label className="light" htmlFor="website">
                    <input
                      type="checkbox"
                      id="website"
                      className="radio"
                      defaultValue="website"
                      name="hear_us"
                    />
                    Website
                  </label>
                  <br />
                  <label className="light" htmlFor="youtube">
                    <input
                      type="checkbox"
                      id="youtube"
                      className="radio"
                      defaultValue="youtube"
                      name="hear_us"
                    />
                    Youtube
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="box1">
                  <textarea
                    name="remarks"
                    cols={40}
                    rows={3}
                    className="wpcf7-form-control wpcf7-textarea"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
