import React, { useEffect, useState } from "react";
import stadiumData from "./stadiumData.json"; // Adjust the path if necessary
import { ChatBox } from "./ChatBox";

export const StartExercisePage: React.FC = () => {
  const [weatherData, setWeatherData] = useState({
    generalSituation: "",
    forecastPeriod: "",
    forecastDesc: "",
    outlook: "",
    updateTime: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>("九龍城區");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(event.target.value);
  };

  const filteredStadiums =
    selectedDistrict === "所有區域"
      ? stadiumData
      : stadiumData.filter(
          (stadium) => stadium.District_cn === selectedDistrict
        );

  const isWeatherSuitable = () => {
    const { generalSituation, forecastDesc } = weatherData;
    const suitableConditions = ["天晴", "多雲", "陽光普照"];
    return suitableConditions.some(
      (condition) =>
        generalSituation.includes(condition) || forecastDesc.includes(condition)
    );
  };

  const getRecommendedActivity = () => {
    const { generalSituation, forecastDesc } = weatherData;
    if (generalSituation.includes("雨") || forecastDesc.includes("雨")) {
      return "建議進行室內活動，如羽毛球、乒乓球等";
    }
    if (generalSituation.includes("天晴") || forecastDesc.includes("多雲")) {
      return "適合進行戶外活動，如跑步、足球等";
    }
    return "天氣不穩定，請小心安排活動";
  };

  const hasExtremeWeather = () => {
    const extremeConditions = ["雷暴", "暴雨", "颱風"];
    return extremeConditions.some((condition) =>
      weatherData.generalSituation.includes(condition)
    );
  };

  if (loading) {
    return <div className="text-center mt-5">載入中...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        無法載入天氣資訊，請稍後再試。
      </div>
    );
  }

  const districtOptions = Array.from(
    new Set(stadiumData.map((stadium) => stadium.District_cn))
  );

  return (
    <div className="container mt-5">
      <div className="text-center my-4">
        <h3 className="fw-bold display-6 text-primary">
          <i className="fas fa-cloud-sun"></i> 香港天文台 - 即時天氣資訊
        </h3>
        <p className="text-muted">實時天氣資訊與預報</p>
      </div>

      {/* Weather Alerts */}
      {hasExtremeWeather() && (
        <div className="alert alert-danger text-center fw-bold">
          注意：天氣極端，請避免戶外活動！
        </div>
      )}

      {/* Weather Summary */}
      <div className="card shadow-sm border-0 rounded-3 mb-4">
        <div className="card-body">
          <h4 className="fw-bold text-dark mb-4">
            <i className="fas fa-sun text-warning me-2"></i> 最新天氣概況
          </h4>
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-clock text-primary me-3"></i>
            <span className="text-muted">
              <strong>更新時間：</strong>{" "}
              {new Date(weatherData.updateTime).toLocaleString()}
            </span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-cloud-sun text-secondary me-3"></i>
            <span>
              <strong>一般概況：</strong> {weatherData.generalSituation}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <i className="fas fa-chart-line text-info me-3"></i>
            <span>
              <strong>展望：</strong> {weatherData.outlook}
            </span>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="alert alert-primary text-center fw-bold fs-5">
        活動建議：你可以問問我們的AI小助手，關於任何活動也可以！
      </div>

      {/* <div className="alert alert-info text-center fw-bold fs-5">
        活動建議：你可以問問我們的AI小助手，關於任何活動也可以！
      </div> */}
      <ChatBox weatherData={weatherData} />

      {/* Filter and LCSD Sports Grounds */}
      <div className="mt-5">
        <h4 className="fw-bold text-primary mb-4">
          <i className="fas fa-dumbbell"></i> 康樂及文化事務署運動場地
        </h4>
        <div className="mb-3">
          <label htmlFor="district-filter" className="form-label">
            選擇區域 (Select District):
          </label>
          <select
            id="district-filter"
            className="form-select"
            value={selectedDistrict}
            onChange={handleDistrictChange}
          >
            <option value="所有區域">所有區域 (All Districts)</option>
            {districtOptions.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          {filteredStadiums.map((stadium, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow-sm border-0 rounded-3">
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">
                    {stadium.Name_cn} ({stadium.District_cn})
                  </h5>
                  <p className="text-muted mb-2">
                    <i className="fas fa-map-marker-alt text-danger me-2"></i>
                    {stadium.Address_cn || "地址暫無提供"}
                  </p>
                  <p className="text-muted mb-2">
                    <strong>設施：</strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: stadium.Facilities_cn,
                      }}
                    ></span>
                  </p>
                  <p className="text-muted">
                    <strong>電話：</strong> {stadium.Phone || "無資料"}
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${stadium.Latitude},${stadium.Longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-2"
                  >
                    查看地圖
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            <i className="fas fa-sync-alt"></i> 重新載入
          </button>
        </div>
      </div>
    </div>
  );
};
