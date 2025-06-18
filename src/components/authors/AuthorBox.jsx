const AuthorBox = ({ name, role, bio, avatar, socialLinks }) => {
    return (
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-3" />
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">{bio}</p>
        <div className="mt-3 flex space-x-3">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="text-blue-400 hover:text-blue-600">
              Twitter
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="text-blue-700 hover:text-blue-900">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default AuthorBox;