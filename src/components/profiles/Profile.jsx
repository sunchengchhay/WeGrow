import React from "react";
import { Header } from "../shared/Header";
import AvatarOption from "./AvatarOption";
import Settings from "./Settings";

import { Card } from "@material-tailwind/react";

const Profile = ({ children, title, name }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <AvatarOption title={title} name={name} />

        {/* settingOption + Form */}
        <div className="grid lg:grid-cols-3 place-items-center lg:place-items-start m-16">
          {/* setting */}
          <div className="lg:col-span-1">
            <Settings />
          </div>

          {/* form */}
          <div className="lg:col-span-2 place-self-left mt-10 lg:mt-0 w-[80%]">
            <Card color="transparent" shadow={false}>
              {children}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;