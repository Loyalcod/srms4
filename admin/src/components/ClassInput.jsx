function ClassInput({className,gradeName, classCrateEg, gradeEg, classPh, gradePh }) {
  return (
    <>
      <form>
        <div className="class-form">
          <label>{className}</label>
          <br />
          <input type="text" placeholder={classPh} />
          <p>{classCrateEg}</p>
        </div>
        <div className="class-form">
          <label>{gradeName}</label>
          <br />
          <input type="text" placeholder={gradePh}/>
          <p>{gradeEg}</p>  
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default ClassInput;
