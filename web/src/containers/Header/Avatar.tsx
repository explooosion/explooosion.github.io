import { memo } from 'react';

const Avatar = memo(function Avatar() {
  return (
    <img
      className="jello-horizontal rounded"
      src="/avatar.png"
      alt="Hi"
      title="Hi"
    />
  )
});

export default Avatar;
