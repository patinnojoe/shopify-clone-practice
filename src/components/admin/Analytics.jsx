// import { Link } from 'react-router-dom';
import { ChartComp, Dashboard, WaterfallChart } from './UI';

import { FiMaximize2 } from 'react-icons/fi';
import { FaRegCalendar, FaFileLines } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
//chat

const Analytics = () => {
  document.title = 'My Store - Analytics - Shopify';
  return (
    <Dashboard>
      <section className="d-flex flex-column gap-4 pb-2">
        <div className="row g-5custom p-0 m-0">
          <div className="analytics-header">
            <div className="discount-header">
              <h5 className="fw-bold">Analytics</h5>
              <div className="d-flex align-items-center gap-2">
                <button className="shopify-primary-btn grey-btn clr-black d-flex gap-2 align-items-center">
                  <FiMaximize2 color="#000" />
                  <span className="clr-black "> Full screen</span>
                </button>
              </div>
            </div>

            {/* sub buttons */}
            <div className="discount-header">
              <div className="d-flex gap-2 align-items-center flex-wrap">
                <button className="shopify-primary-border-btn bg-white d-flex gap-2 align-items-center">
                  <FaRegCalendar />
                  Today
                </button>

                <button className="shopify-primary-border-btn bg-white d-flex gap-2 align-items-center">
                  Compare: yesterday
                </button>
              </div>
              <div className="d-flex gap-3 align-items-center flex-wrap">
                {/* auto refresh */}
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <input type="checkbox" id="onlineStore" className="ui-input-checkbox" />
                  <span className="fnt-14 dotted-underline">Auto refresh</span>
                </div>
                <button className="shopify-primary-border-btn bg-white customize-analytics-btn">Customize</button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Total sales
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Total sales will be a positive number for a sale on the date that an order was placed, and a
                        negative number for a return on the date that an order was returned. Includes all sales
                        channels.
                      </span>
                      <span className="bg-grey p-2 b-radius8 text-start">
                        <span className="text-primary">Total sales</span> =
                        <span className="text-success">
                          gross sales - discounts - returns + taxes + duties + shipping charges
                        </span>
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div className="" width="100%" height="100%">
                <p className="fw-bold px-3 m-0">NG0.00</p>
                <ChartComp />
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Sales by channels
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Total sales value associted with each of your active sales channels.
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div
                className="mt-3 flex-grow-1 d-flex align-items-center justify-content-center"
                width="100%"
                height="100%"
              >
                <p> There was no data found for this date range.</p>
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Online store section
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">Your online store&apos;s traffic volume, shown in sessions.</span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div className=" " width="100%" height="100%">
                <p className="fw-bold px-3 m-0 d-flex  gap-1">
                  <span> 0</span>

                  <span className="dashed-border"></span>
                </p>
                <WaterfallChart />
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm p-0 ">
              <header className="analytics-card-header px-3 my-3">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Online store conversion rate
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Percentage that resulted in online store orders, out of the total number of sessions.
                      </span>
                      <span className="bg-grey p-2 b-radius8 text-start">
                        <span className="text-primary">Online store conversion rate</span> =
                        <span className="text-success">[ converted session/ all session ] * 100</span>
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div className="w-100 ">
                <p className="fw-bold px-3 m-0 d-flex  gap-1">
                  <span> 0</span>

                  <span className="dashed-border"></span>
                </p>
                <table className="converted-session-table w-100 mb-5">
                  <thead></thead>
                  <tbody>
                    <tr className="table-row">
                      <th className="table-header">
                        <span>Added to cart</span>
                        <span>0 sessions</span>
                      </th>
                      <td>
                        <span className="">0.00%</span>
                      </td>
                      <td>
                        <span className="dashed-border"></span>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <th className="table-header">
                        <span>Reached checkout</span>
                        <span>0 sessions</span>
                      </th>
                      <td>
                        <span className="">0.00%</span>
                      </td>
                      <td>
                        <span className="dashed-border"></span>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <th className="table-header">
                        <span>Session converted</span>
                        <span>0 sessions</span>
                      </th>
                      <td>
                        <span className="">0.00%</span>
                      </td>
                      <td>
                        <span className="dashed-border"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Customer cohort analysis
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Total sales value associted with each of your active sales channels.
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div
                className="mt-3 flex-grow-1 d-flex align-items-center justify-content-center"
                width="100%"
                height="100%"
              >
                <p> There was no data found for this date range.</p>
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Returning customer rate
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Total sales value associted with each of your active sales channels.
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div
                className="mt-3 flex-grow-1 d-flex align-items-center justify-content-center"
                width="100%"
                height="100%"
              >
                <p> There was no data found for this date range.</p>
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Top selling product
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Total sales value associted with each of your active sales channels.
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div
                className="mt-3 flex-grow-1 d-flex align-items-center justify-content-center"
                width="100%"
                height="100%"
              >
                <p> There was no data found for this date range.</p>
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm ">
              <header className="analytics-card-header">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Customer cohort analysis
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Total sales value associted with each of your active sales channels.
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div
                className="mt-3 flex-grow-1 d-flex align-items-center justify-content-center"
                width="100%"
                height="100%"
              >
                <p> There was no data found for this date range.</p>
              </div>
            </section>
          </div>

          <div className="col-xl-4 col-lg-6 col-sm-12">
            <section className="analytics-card shadow-sm p-0 ">
              <header className="analytics-card-header px-3 my-3">
                <button className="dotted-underline fnt-14 normal-tool-tip-btn ">
                  Online store conversion rate
                  <div className="normal-tool-tip-content">
                    <div className="d-flex flex-column gap-2">
                      <span className="text-start">
                        Percentage that resulted in online store orders, out of the total number of sessions.
                      </span>
                      <span className="bg-grey p-2 b-radius8 text-start">
                        <span className="text-primary">Online store conversion rate</span> =
                        <span className="text-success">[ converted session/ all session ] * 100</span>
                      </span>
                    </div>
                  </div>
                </button>

                <button className="btn-with-hover-text ">
                  <FaFileLines color="grey" />
                  <span className="fnt-14 text-primary hover-text">View report</span>
                </button>
              </header>

              <div className="w-100 ">
                <p className="fw-bold px-3 m-0 d-flex  gap-1">
                  <span> 0</span>

                  <span className="dashed-border"></span>
                </p>
                <table className="converted-session-table w-100 mb-5">
                  <thead></thead>
                  <tbody>
                    <tr className="table-row">
                      <th className="table-header">
                        <span>Added to cart</span>
                        <span>0 sessions</span>
                      </th>
                      <td>
                        <span className="">0.00%</span>
                      </td>
                      <td>
                        <span className="dashed-border"></span>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <th className="table-header">
                        <span>Reached checkout</span>
                        <span>0 sessions</span>
                      </th>
                      <td>
                        <span className="">0.00%</span>
                      </td>
                      <td>
                        <span className="dashed-border"></span>
                      </td>
                    </tr>

                    <tr className="table-row">
                      <th className="table-header">
                        <span>Session converted</span>
                        <span>0 sessions</span>
                      </th>
                      <td>
                        <span className="">0.00%</span>
                      </td>
                      <td>
                        <span className="dashed-border"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>

        <p className="fnt-14 text-center">
          Learn more about <Link>overview dashboard</Link>
        </p>
      </section>
    </Dashboard>
  );
};

export default Analytics;
