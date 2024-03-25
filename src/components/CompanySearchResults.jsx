import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CompanySearchResults = ({}) => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>

          <Button
            className="d-flex"
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVOURITES",
                payload: params.company,
              });
            }}
          >
            AGGIUNGI
          </Button>
          <Link to="/favourites" className="btn btn-primary mt-2">
            GO TO FAVOURITES
          </Link>

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
