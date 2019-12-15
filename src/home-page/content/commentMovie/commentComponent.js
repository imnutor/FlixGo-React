import React, { Component } from "react";
import {IoIosThumbsUp, IoIosThumbsDown, IoIosShareAlt, IoIosQuote} from "react-icons/io";

export default class CommentComponent extends Component {
  render() {
    return (
      <section className="content">
        <div className="content__head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* content title */}
                <h2 className="content__title">Discover</h2>
                {/* end content title */}
                {/* content tabs nav */}
                <ul
                  className="nav nav-tabs content__tabs"
                  id="content__tabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Comments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-8">
              {/* content tabs */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab-1"
                  role="tabpanel"
                  aria-labelledby="1-tab"
                >
                  <div className="row">
                    {/* comments */}
                    <div className="col-12">
                      <div className="comments">
                        <ul className="comments__list">
                          <li className="comments__item">
                            <div className="comments__autor">
                              <img
                                className="comments__avatar"
                                src="/image/user.png"
                                alt=""
                              />
                              <span className="comments__name">John Doe</span>
                              <span className="comments__time">
                                30.08.2018, 17:53
                              </span>
                            </div>
                            <p className="comments__text">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>
                            <div className="comments__actions">
                              <div className="comments__rate">
                                <button type="button">
                                  <i><IoIosThumbsUp /></i>
                                  12
                                </button>
                                <button type="button">
                                  7<i><IoIosThumbsDown /></i>
                                </button>
                              </div>
                              <button type="button">
                                <i><IoIosShareAlt /></i>
                                Reply
                              </button>
                              <button type="button">
                                <i><IoIosQuote /></i>
                                Quote
                              </button>
                            </div>
                          </li>
                          <li className="comments__item comments__item--answer">
                            <div className="comments__autor">
                              <img
                                className="comments__avatar"
                                src="/image/user.png"
                                alt=""
                              />
                              <span className="comments__name">John Doe</span>
                              <span className="comments__time">
                                24.08.2018, 16:41
                              </span>
                            </div>
                            <p className="comments__text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </p>
                            <div className="comments__actions">
                              <div className="comments__rate">
                                <button type="button">
                                  <i><IoIosThumbsUp /></i> 8
                                </button>
                                <button type="button">
                                  3<i><IoIosThumbsDown /></i> 
                                </button>
                              </div>
                              <button type="button">
                              <i><IoIosShareAlt /></i>
                                Reply
                              </button>
                              <button type="button">
                              <i><IoIosQuote /></i>
                                Quote
                              </button>
                            </div>
                          </li>
                          <li className="comments__item comments__item--quote">
                            <div className="comments__autor">
                              <img
                                className="comments__avatar"
                                src="/image/user.png"
                                alt=""
                              />
                              <span className="comments__name">John Doe</span>
                              <span className="comments__time">
                                11.08.2018, 11:11
                              </span>
                            </div>
                            <p className="comments__text">
                              <span>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                              </span>
                              It has survived not only five centuries, but also
                              the leap into electronic typesetting, remaining
                              essentially unchanged. It was popularised in the
                              1960s with the release of Letraset sheets
                              containing Lorem Ipsum passages, and more recently
                              with desktop publishing software like Aldus
                              PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className="comments__actions">
                              <div className="comments__rate">
                                <button type="button">
                                <i><IoIosThumbsUp /></i>
                                  11
                                </button>
                                <button type="button">
                                  1<i><IoIosThumbsDown /></i>
                                </button>
                              </div>
                              <button type="button">
                              <i><IoIosShareAlt /></i>
                                Reply
                              </button>
                              <button type="button">
                              <i><IoIosQuote /></i>
                                Quote
                              </button>
                            </div>
                          </li>
                        </ul>
                        <form action="#" className="form">
                          <textarea
                            id="text"
                            name="text"
                            className="form__textarea"
                            placeholder="Add comment"
                            defaultValue={""}
                          />
                          <button type="button" className="form__btn">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* end comments */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
