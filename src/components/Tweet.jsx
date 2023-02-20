import ProfileImage from "./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"

function Tweet({dog}) {
  return (
    <div className="tweet">
      <ProfileImage image={dog.user.image} />
      <div className="body">
        <div className="top">
          <User userData={dog.user} />
          <Timestamp time={dog.timestamp} />
        </div>
          <Message message={dog.message} />
          <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
