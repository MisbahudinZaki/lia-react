import TeamCard from "../Card/TeamCard";
import teamData from "../../Data/teamdata";

const TeamGridSection = () => {

    // index card yang HARUS pakai offset-small (0-based)
    const offsetIndexes = [1, 2, 5, 6];

    return (
        <section className="section team-extend-banner">
            <div className="hero-container">

                <div className="d-flex flex-column gspace-3">

                    <div className="text-center">
                        <h6 className="accent-color">Team</h6>
                        <h3>Empowering Growth Through Collective Genius</h3>
                        <p>
                            Egestas dui id ornare arcu odio ut sem nulla pharetra.
                        </p>
                    </div>

                    <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 grid-spacer-2">
                        {teamData.map((item, index) => (
                            <div className="col" key={item.id}>
                                <TeamCard
                                    {...item}
                                    offset={offsetIndexes.includes(index) ? "offset-small" : ""}
                                />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TeamGridSection;