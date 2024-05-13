import "../../Components/Profil/Profil.css";

const Profil = ({ host }) => {
  if (!host) return;

  return (
    <div className="profil">
      <p className="profil_name">{host.name}</p>
      <img className="round_img" src={host.picture} alt="profil" />
    </div>
  );
};

export default Profil;
