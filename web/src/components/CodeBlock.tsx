import { memo, useEffect } from 'react';
import Prism from 'prismjs';
import DOMPurify from 'dompurify';

import './CodeBlock.css';

const PureHtml = memo(function PureHtml({ code }: { code: string }) {
  return (
    <pre className="pure-html" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(code, { ADD_ATTR: ['target'] }) }} />
  );
});

const PureCode = memo(function PureCode({ code }: { code: string }) {
  return (
    <pre>
      <code className="language-js">
        {code}
      </code>
    </pre>
  );
});

const CodeBlock = memo(function CodeBlock({ code, html }: { code: string, html?: boolean }) {
  useEffect(() => {
    if (!html) Prism.highlightAll();
  }, [html]);

  return html ? <PureHtml code={code} /> : <PureCode code={code} />;
});

export default CodeBlock;
