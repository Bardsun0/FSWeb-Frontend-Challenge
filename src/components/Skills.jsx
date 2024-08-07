import useTranslation from "../hooks/useTranslation";

function Skills() {
  const t = useTranslation();

  return (
    <div className="w-[1440px] h-[489px]">
      <div className="w-[942px] h-[280px] mx-auto flex flex-col items-center">
        <p className="w-[122px] h-[58px] text-[48px] text-shadow-custom font-inter font-medium text-center my-[68px] mr-[4px]">
          {t("skillsTitle")}
        </p>
        <div className="w-[942px] h-[166px] flex justify-between items-center">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/js.png"
              alt="JavaScript"
              className="w-[146px] h-[166px] ml-2"
            />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/react.png"
              alt="React"
              className="w-[120px] h-[166px]"
            />
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/redux.png"
              alt="Redux"
              className="w-[120px] h-[166px]"
            />
          </a>
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/node.png"
              alt="Node"
              className="w-[120px] h-[166px]"
            />
          </a>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/vscode.png"
              alt="VS Code"
              className="w-[120px] h-[166px]"
            />
          </a>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/figma.png"
              alt="FIGMA"
              className="w-[120px] h-[166px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
