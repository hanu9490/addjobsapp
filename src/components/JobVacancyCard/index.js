import "./index.css";

const JobVacancyCard = (props) => {
  const { jobCardDetails } = props;
  const { jobTitle, companyName, salary, date, time, description } =
    jobCardDetails;
  return (
    <div className="job-card-container">
      <h1 className="card-title">{jobTitle}</h1>
      <div className="img-company-con">
        <img
          className="profile-img"
          alt="companyIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqxrqzrN50UDPP-yZIzm1on7GpQ5_aFGvr9K8GOLL1Sq-tOFF1AFJQL_F82FckhOPqCs&usqp=CAU"
        />
        <p className="company-name">{companyName}</p>
      </div>
      <div className="salary-con">
        <p className="salary">
          Salary : {salary}k /m
        </p>
        <p className="date">
          {date}
          {time}
        </p>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default JobVacancyCard;
