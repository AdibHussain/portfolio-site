const ProgressBar = (props) => {
  const { completed, name } = props;

  return (
    <div className="progress">
      <span className="progress_label">{`${name}`}</span>

      <div className="progress_container">
        <div
          style={{
            width: `${completed}%`,
          }}
          className="progress_filler"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
