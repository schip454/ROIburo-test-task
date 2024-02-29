import TeamSlider from './TeamSlider';

const TeamSection = () => {
  return (
    <section className="team">
      <h2 className="section-title">Наша команда</h2>
      <p className="team__text">
        Металл-Маркет — это команда профессионалов, влюбленных в свое дело.
        Уверены, что развитие компании начинается с развития ее сотрудников.
      </p>
      <TeamSlider />
    </section>
  );
};

export default TeamSection;
