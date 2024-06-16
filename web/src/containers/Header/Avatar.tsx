import { memo } from 'react';

const Avatar = memo(function Avatar() {
  return (
    <img
      className="w-full max-w-[400px] rounded jello-horizontal"
      src="/avatar.png"
      alt="Hi"
      title="Hi"
    />
  )
});

export default Avatar;
