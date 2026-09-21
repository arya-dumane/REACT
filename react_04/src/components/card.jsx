import { memo } from 'react';
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
     <div className="card">

        {/* TOP */}
        <div className="top">

          <img
            src={props.brandlogo}
            alt="Amazon"
          />

          <button>
            Save <Bookmark size={12} />
          </button>

        </div>


        {/* CENTER */}
        <div className="center">

          <h3>
            {props.company} <span>{props.dateposted}</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="bottom">

          <div>
            <h3>{props.pay}</h3>
            <h4>{props.location}</h4>
          </div>

          <button>
            Apply Now
          </button>

        </div>

      </div>
  );
};

export default memo(Card);