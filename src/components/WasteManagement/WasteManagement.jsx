import React, { useEffect, useState } from "react";
import WasteManagementIMG from "./../../assets/waste_management/WasteManagement.png";
import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";
import { PiArrowFatLineUpLight } from "react-icons/pi";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { useDispatch, useSelector } from "react-redux";
import wm from "./WasteManagement.module.css";
import {
  Facebook,
  FacebookOutlined,
  FacebookRounded,
} from "@mui/icons-material";
import CreatePostForRedactor from "./CreatePostForRedactor/CreatePostForRedactor";
import { deletePost, getPostList, likePost } from "../../redux/redactor";
import DeleteIcon from "./../../assets/waste_management/delete.svg";
import Nothing from "../common/Nothing/Nothing";

const WasteManagement = () => {
  const { user, isAuth, isModerator } = useSelector((state) => state.user);
  const { postList } = useSelector((state) => state.redactor);
  const dispatch = useDispatch();

  const [isCreatePostMode, setIsCreatePostMode] = useState(false);

  const handleClickLikeOnPost = async (postUrl, userUrl) => {
    const res = await dispatch(likePost({ user: userUrl, post: postUrl }));

    if (res.type === "redactor/like-post/fulfilled") {
      dispatch(getPostList());
    }
  };

  const handleClickDeletePost = async (postId) => {
    const res = await dispatch(deletePost(postId));

    if (res.type === "redactor/delete-post/fulfilled") {
      dispatch(getPostList());
    }
  };

  useEffect(() => {
    if (isAuth) {
      dispatch(getPostList());
    }
  }, [isAuth]);
  return (
    <div className={wm.waste__management_wrapper}>
      <div className="waste-tab">
        <div className="waste-banner">
          <img src={WasteManagementIMG} />
          <h1>WasteManagement</h1>
        </div>
        <div className="waste-posts">
          {isCreatePostMode ? (
            <CreatePostForRedactor setIsCreatePostMode={setIsCreatePostMode} />
          ) : (
            <div className={wm.post__list_wrapper}>
              {user && postList && postList.length > 0 ? (
                postList.map((item) => (
                  <div className="post">
                    <div>
                      <div className="post-top">
                        <div className="post__top_left">
                          <h1>{item?.redactor_name || ""}</h1>
                          <div className="editor-links">
                            {item?.redactor_instagram && (
                              <a
                                style={{ color: "#000" }}
                                target="_blank"
                                href={item?.redactor_instagram || ""}
                              >
                                <FaInstagram className={wm.editor__link_icon} />
                              </a>
                            )}
                            {item?.redactor_telegram && (
                              <a
                                style={{ color: "#000" }}
                                target="_blank"
                                href={item?.redactor_telegram || ""}
                              >
                                <LiaTelegramPlane
                                  className={wm.editor__link_icon}
                                />
                              </a>
                            )}
                            {item?.redactor_facebook && (
                              <a
                                style={{ color: "#000" }}
                                target="_blank"
                                href={item?.redactor_facebook || ""}
                              >
                                <FacebookOutlined
                                  className={wm.editor__link_icon}
                                />
                              </a>
                            )}
                            {item?.redactor_youtube && (
                              <a
                                style={{ color: "#000" }}
                                target="_blank"
                                href={item?.redactor_youtube || ""}
                              >
                                <AiOutlineYoutube
                                  className={wm.editor__link_icon}
                                />
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="post-likes-dislikes">
                          <PiArrowFatLineUpLight
                            onClick={() =>
                              handleClickLikeOnPost(
                                item?.url || null,
                                user?.url || null
                              )
                            }
                            className={wm.like__post}
                          />
                          <p>{item.number_of_likes}</p>
                        </div>
                      </div>
                      <div className="post-desc">
                        <p>{item?.text || ""}</p>
                      </div>
                    </div>
                    {isModerator && (
                      <div className={wm.delete__wrapper}>
                        <img
                          src={DeleteIcon}
                          alt="trash"
                          onClick={() => handleClickDeletePost(item?.id)}
                        />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <Nothing />
              )}
            </div>
          )}
        </div>
        {!isCreatePostMode && user && user.redactor && (
          <div className={wm.add__post_wrapper}>
            <button onClick={() => setIsCreatePostMode(true)}>Add post</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default compose(WithAuthRedirect)(WasteManagement);
