import React, { useState, useEffect } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import JOBS from "../constants/jobs"
import { Link } from "gatsby"

const Jobs = () => {
  const [value, setValue] = useState(0)
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(null);
 
  const [isLoaded, setIsLoaded] = useState(false);

  const reverseArray = JOBS.slice().reverse()

  const {company, position, date, desc} = reverseArray[value]

  console.log(company)



/* 
  useEffect(() => {
    const cunsultarJobs = async () => {
      const url = `http://165.232.151.50/jobs`
      const respuesta = await fetch(url)
      const jobs = await respuesta.json()
      setIsLoaded(true)
      setJobs(jobs)
    }
    cunsultarJobs()
  }, []) */

  useEffect(() => {
    fetch("http://165.232.151.50/jobs")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJobs(result);
         
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

 if(!isLoaded){
    return <div>Loading...</div>
 }else {
  return (

    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        <div className="btn-container">
          {reverseArray.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{ position}</h3>
          <h4>{ company}</h4>
          <p className="job-date">{ date}</p>
          { desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article> 
      </div>
      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  )

 }

 
}

export default Jobs
