import dedent from 'dedent';
import Highlight from 'react-highlight';

export default ({ children, className }) => {
  const formattedCode = dedent`${children}`;

  return (
  <div className="rounded-lg p-6 bg-code overflow-x-auto text-gray-400 text-sm">
    <Highlight className={`language-${className.replace(/language-/, '')}`}>
      {formattedCode}
    </Highlight>
  </div>
)};
