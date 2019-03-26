import React from 'react';
import Loader from './common/Loader';
import Alert from './common/Alert';
import { getFacultiesQuery } from '../graph/queries';
import { Query } from 'react-apollo';

const About = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="mb-0">About</h5>
          </div>
          <div className="card-body">
            <p>
              The Department was founded in 1993 as the Department of Chemical
              Technology and Polymer Science. Shortly after its foundation, the
              whole course curriculum was thoroughly revised in order to meet
              the national and international requirements to the 4 years’
              graduation program on Chemical Engineering and Polymer Science,
              and the department was renamed as the Department of Chemical
              Engineering and Polymer Science. It is the only department in
              Bangladesh, which besides the chemical engineering courses, offers
              courses on Polymer Science and Technology enabling graduates an
              additional opportunity to start career in the growing polymer
              based industries in the country. Thus, it has become unique of its
              type in the whole country.
            </p>

            <p>
              The syllabus and course contents of the Graduation Program are
              regularly updated so as to comply with the needs in the job
              market. All the students undergo a month long training program in
              the Training Institute for Chemical Industries (TICI)- (central
              training institute of Bangladesh Chemical Industries Corporation,
              BCIC). Also the students undergo in plant training in different
              industries.
            </p>

            <p>
              The unit operation laboratory of the department is furnished with
              modern equipments like drying unit, ion exchange unit, heat
              exchanger unit, distillation unit and adsorption unit. The
              department is also well equipped with the laboratories of fluid
              mechanics, polymer processing and testing, organic chemistry,
              inorganic chemistry, chemical reaction engineering, physical
              chemistry, and fuel & energy.
            </p>

            <p>
              The department has an Instrumental Analysis Lab, which facilitates
              the chemical analyses with its modern instruments like, gas
              chromatography (GC), high performance liquid chromatography
              (HPLC), UV-spectrophotometer and other small instruments. The
              researchers and students have free access to Atomic Absorption
              Spectrophotometer (AAS) and Fourier Transform Infra-red
              Spectrometer of the Central Instrumental Laboratory of the
              University. The department is well equipped with computing
              facilities, which include personal computers, workstations, and
              access to the university network and the Internet.
            </p>

            <p>
              Recently, an environmental process engineering Lab has been built
              with the financial support of EU Project INNOWA. The Laboratory is
              equipped with water and wastewater quality control facilities,
              water and air samplers, Jar test unit, zone-settling unit, column
              settling unit, adsorption cum filtration unit, continuous flow
              arsenic and iron free drinking water unit, integrated pilot plant
              on microfiltration (MF), Ultrafiltration (UF), Nanofiltration (NF)
              and Reverse Osmosis (RO) processes, and a Lab scale two chambered
              membrane bioreactor.
            </p>

            <p>
              Teachers and students are actively involved in research on the
              development of water and wastewater treatment technology applying
              conventional and advanced methods as membrane processes. For the
              first time in Bangladesh, an MBR unit has been designed and
              constructed by a 6-membered students’ group and tested in an
              industry. Development of software is underway for designing
              wastewater treatment facilities. In close cooperation with the
              researchers from the department of Civil and Environmental
              Engineering, the department has planned a one-year’s monitoring
              program for the quality of water of Surma River.
            </p>

            <p>
              Active research is going on the production of bio-fuel (biogas,
              bioalcohol, biodiesel) from biodegradable solid wastes and
              non-edible indigenous oil seeds through sustainable technology.
            </p>

            <p>
              In close cooperation with national and international research
              partners, application oriented researches are conducted on polymer
              composites, polymer-based ion-selective adsorbents, and
              preparation of porous tubes with recycled polymer materials for
              drop-wise irrigation systems. For the first time in Bangladesh,
              with the full financial and logistic support and Laboratory
              facilities from the Housing and Building Research Institute
              (Dhaka), the department has initiated research on polymer modified
              concrete for specific applications.
            </p>

            <p>
              The department has established sustainable relationship for staff
              exchange and joint research program with the Institute of Membrane
              Technology (Italy), University of Applied sciences Karlsruhe
              (Germany), Jiangsu Polytechnic University (China) and the
              University of Waikato (New Zealand). Under the framework of
              collaboration program, the department has already organized a
              training program on membrane technology with internationally
              reputed professors as lecturers. On 01-04 April 2007, the
              department organized an international conference and exhibition on
              water and wastewater treatment.
            </p>

            <p>
              The teachers and students from the department take active part in
              national and international seminar and conferences with research
              papers. Works of the students and teachers are published in
              national and international conference proceedings as well as in
              internationally reputed journals with high impact factor and are
              continuously cited by international authors.
            </p>

            <p>
              The graduates from the department have been competing successfully
              in the national and international job market since the first batch
              graduated, and showing excellent performances in their job. A
              number of graduates have already completed post-graduation (MS,
              PhD) in highly reputed universities abroad and many young
              graduates have been admitted for higher degrees abroad. Some
              graduates, in virtue of their excellent performances in the
              universities abroad have already started playing the role of a
              bridge relating our department and the institution abroad for
              staff exchange and research collaboration.
            </p>

            <p>
              The Department of Chemical Engineering and Polymer Science is
              flourishing day by day improving its educational and research
              base. Very soon we are going to start world standard MS and PhD
              program independently in the department, in collaboration with
              other departments of SUST and other educational and research
              institutions in the country. As a continuation of sustainable
              research collaboration with its international partners, the
              department is on the path to start student exchange program
              initially at MS and PhD level.
            </p>

            <p className="mb-0">
              The department with its experienced teaching and administrative
              staff, and educational and research structure is committed to
              produce graduates and post-graduates with appropriate knowledge
              and confidence to compete in the national and international job
              markets. The department shall devotedly prepare highly qualified
              human resources for different sectors in Bangladesh and outside
              world.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="mb-0">Faculties</h5>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
              <Query query={getFacultiesQuery}>
                {({ loading, error, data }) => {
                  if (loading) return <Loader style={{ minHeight: 1 }} />;
                  if (error) return <Alert alert={error} />;
                  return data.faculties.map(faculty => (
                    <li key={faculty.facultyId}>
                      <div className="media align-items-center mb-3">
                        <div className="avatar avatar-3xl">
                          <img
                            className="rounded-soft"
                            src={faculty.thumbnailUrl}
                            alt={faculty.name}
                          />
                        </div>
                        <div className="media-body ml-2">
                          <h5 className="mb-0 font-weight-bold fs-0">
                            <a
                              className="text-800"
                              href={`https://www.sust.edu/d/cep/faculty-profile-detail/${
                                faculty.facultyId
                              }`}
                              target="_blank"
                            >
                              {faculty.name}
                            </a>
                          </h5>
                          <p className="mb-0">
                            {faculty.designation.replace('_', ' ')}
                          </p>
                        </div>
                      </div>
                    </li>
                  ));
                }}
              </Query>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
