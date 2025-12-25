import { memo } from "react";
import {
  FaSquareGithub,
  // FaSquareGitlab,
  FaLinkedin,
  FaSquareRss,
  // FaCodepen,
  FaInbox,
  FaSquareInstagram,
  // FaSquareYoutube,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";

interface IResource {
  key: string;
  link: string;
  img: IconType;
}

const Icon = memo(function Icon({ resource }: { resource: IResource }) {
  const { link, img: Img } = resource;
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="text-3xl text-gray-700 shake"
    >
      <Img />
    </a>
  );
});

const Icons = memo(function Icons() {
  const resources: IResource[] = [
    {
      key: "github",
      link: "https://github.com/explooosion",
      img: FaSquareGithub,
    },
    // {
    //   key: "gitlab",
    //   link: "https://gitlab.com/explooosion",
    //   img: FaSquareGitlab,
    // },
    {
      key: "blog",
      link: "https://dotblogs.com.tw/explooosion",
      img: FaSquareRss,
    },
    {
      key: "linkedin",
      link: "https://www.linkedin.com/in/robby-wu-2b26b510a",
      img: FaLinkedin,
    },
    // { key: "codepen", link: "https://codepen.io/ta7382", img: FaCodepen },
    {
      key: "instagram",
      link: "https://www.instagram.com/robby.570.drone/",
      img: FaSquareInstagram,
    },
    // {
    //   key: "youtube",
    //   link: "https://www.youtube.com/@robbywu570",
    //   img: FaSquareYoutube,
    // },
    { key: "email", link: "mailto:ta7382@gmail.com", img: FaInbox },
  ];

  return (
    <div className="flex items-center justify-between w-4/5 max-w-[250px]">
      {resources.map((resource) => (
        <Icon key={resource.key} resource={resource} />
      ))}
    </div>
  );
});

export default Icons;
