import TeamCard from "../Card/TeamCard";
import teamData from "../../Data/teamdata";

const TeamHighlightSection = () => {
    return (
        <section className="section team-banner">
            <div className="hero-container">
                <div className="row row-cols-xl-2 row-cols-1 grid-spacer-3">

                    <div className="col col-xl-7 order-2 order-xl-1">
                        <div className="d-flex flex-column flex-md-row gspace-2">

                            {teamData.slice(0, 3).map((item, index) => (
                                <TeamCard
                                    key={item.id}
                                    {...item}
                                    offset={
                                        index === 1
                                            ? "offset-small"
                                            : index === 2
                                            ? "offset-large"
                                            : ""
                                    }
                                />
                            ))}

                        </div>
                    </div>

                    <div className="col col-xl-5 order-1 order-xl-2">
                        <div className="team-content-description">
                            <h6 className="accent-color">Team</h6>
                            <h3>Empowering Growth Through Collective Genius</h3>
                            <p>
                                Egestas dui id ornare arcu odio ut sem nulla pharetra.
                            </p>
                            <a href="/team" className="btn btn-accent">
                                View More
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TeamHighlightSection;