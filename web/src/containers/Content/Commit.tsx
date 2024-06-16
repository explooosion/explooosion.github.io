import { memo } from 'react';

const Commit = memo(function Commit() {
  return (
    <section>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href='https://github.com/2016rshah/githubchart-api'
      >
        <img
          src='https://ghchart.rshah.org/409ba5/explooosion'
          alt={`Robby's Github chart`}
          title={`Robby's Github chart`}
          loading="lazy"
        />
      </a>
      <hr className="my-2" />
    </section>
  );
});

export default Commit;
