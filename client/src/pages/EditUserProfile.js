import React, { Component } from "react";
import Aside from "../components/Aside";
import "../assets/css/style.css";
import BottomNavTrainee from "../components/BottomNavTrainee";

class EditUserProfile extends Component {
  render() {
    return (
      <section className='main-content columns is-fullheight'>
        <Aside />
        <div className='box column is-10 has-background-white-bis'>
          <div className='container'>
            <div className='section'>
              <div className='box'>
              <form>
              <article className='box columns is-multiline'>
                  <div className='column is-one-quarter'>
                    <figure className='image is-256x256'>
                      <img
                        src='https://bulma.io/images/placeholders/256x256.png'
                        alt='avatar'
                      />
                    </figure>
                    <div className='section file is-centered'>
                      <label className='file-label'>
                        <input
                          className='file-input'
                          type='file'
                          name='resume'
                        />
                        <span className='file-cta'>
                          <span className='file-icon'>
                            <i className='fas fa-upload'></i>
                          </span>
                          <span className='file-label'>Upload your photo</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className='column auto'>
                    <div className='content'>
                      <section className=''>
                        <div className='field'>
                          <input
                            className='input is-large'
                            type='text'
                            value='John Smith'
                          />
                        </div>
                        <small>johnsmith@gmail.com</small>

                        <hr />
                        <h6 className='has-text-weight-light'>
                          Contact Information
                        </h6>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Phone:</label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control'>
                                <input
                                  className='input'
                                  type='text'
                                  value='647-949-8484'
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Email:</label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control'>
                                <input
                                  className='input'
                                  type='text'
                                  value='johnsmith@gmail.com'
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Address:</label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control'>
                                <input
                                  className='input'
                                  type='text'
                                  value='240 Wellesley St. E Toronto, ON, M4X 1G5'
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <h6 className='has-text-weight-light'>Basic Information</h6>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Birthday:</label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control'>
                                <input
                                  className='input'
                                  type='text'
                                  value='June 25, 1991'
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='field is-horizontal'>
                          <div className='field-label is-normal'>
                            <label className='label'>Gender:</label>
                          </div>
                          <div className='field-body'>
                            <div className='field'>
                              <div className='control'>
                                <input className='input' type='text' value='Male' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </article>
              </form>

              </div>
            </div>
          </div>
        </div>
        <BottomNavTrainee/>
      </section>
    );
  }
}

export default EditUserProfile;
