/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";
import { getCSSVariableValue } from "../../../assets/ts/_utils";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
  innerPadding?: string;
};

const StatsWidget1: React.FC<Props> = ({ className, innerPadding = "" }) => {
  useEffect(() => {
    const element = document.getElementById(
      "kt_stats_widget_1_chart"
    ) as HTMLCanvasElement;
    if (!element) {
      return;
    }

    const options = getChartOptions();
    const ctx = element.getContext("2d");
    let myDoughnut: Chart | null;
    if (ctx) {
      myDoughnut = new Chart(ctx, options);
    }
    return function cleanUp() {
      if (myDoughnut) {
        myDoughnut.destroy();
      }
    };
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* Header */}
      <div
        className={`card-header align-items-center border-0 mt-5 ${innerPadding}`}
      >
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">運動數據分佈</span>
          <span className="text-muted mt-2 fw-bold fs-6">本月運動參與比例</span>
        </h3>
        <div className="card-toolbar">
          {/* Dropdown */}
          {/* <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button> */}
          <Dropdown1 />
          {/* Dropdown */}
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-12">
        {/* Chart */}
        <div
          className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
          style={{
            backgroundImage: `url('${toAbsoluteUrl(
              "/media/svg/illustrations/bg-1.svg"
            )}')`,
          }}
        >
          <div className="fw-bolder fs-1 text-gray-800 position-absolute">
            12,345
          </div>
          <canvas id="kt_stats_widget_1_chart"></canvas>
        </div>
        {/* Chart */}

        {/* Items */}
        <div className="d-flex justify-content-around pt-18">
          {/* Football */}
          <div className="">
            <span className="fw-bolder text-gray-800">45% 足球</span>
            <span className="bg-success w-25px h-5px d-block rounded mt-1"></span>
          </div>

          {/* Basketball */}
          <div className="">
            <span className="fw-bolder text-gray-800">30% 籃球</span>
            <span className="bg-primary w-25px h-5px d-block rounded mt-1"></span>
          </div>

          {/* Tennis */}
          <div className="">
            <span className="fw-bolder text-gray-800">25% 網球</span>
            <span className="bg-warning w-25px h-5px d-block rounded mt-1"></span>
          </div>
        </div>
        {/* Items */}
      </div>
    </div>
  );
};

export { StatsWidget1 };

function getChartOptions() {
  const tooltipBgColor = getCSSVariableValue("--bs-gray-200");
  const tooltipColor = getCSSVariableValue("--bs-gray-800");

  const color1 = getCSSVariableValue("--bs-success");
  const color2 = getCSSVariableValue("--bs-primary");
  const color3 = getCSSVariableValue("--bs-warning");

  const options: ChartConfiguration = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [45, 30, 25],
          backgroundColor: [color1, color2, color3],
        },
      ],
      labels: ["足球", "籃球", "網球"],
    },
    options: {
      cutoutPercentage: 75,
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "運動數據分佈",
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      tooltips: {
        enabled: true,
        intersect: false,
        mode: "nearest",
        bodySpacing: 5,
        yPadding: 10,
        xPadding: 10,
        caretPadding: 0,
        displayColors: false,
        backgroundColor: tooltipBgColor,
        bodyFontColor: tooltipColor,
        cornerRadius: 4,
        footerSpacing: 0,
        titleSpacing: 0,
      },
    },
  };
  return options;
}
