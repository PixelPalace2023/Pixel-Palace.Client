/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import HeaderLayout from "../components/Header";
import { Layout, Col, Row, Pagination, Button, message } from "antd";
import { ThemeProvider } from "next-themes";
import Filters from "../components/Filters";
import FooterLayout from "../components/Footer";
import { deleteGame } from "../services/firebase";
import { ModalConfirm } from "../components/ModalConfirm";
import Link from "next/link";
import { useGames } from "../hooks/useGames";
import Loading from "../loading";
import useUser from "../hooks/useUser";

export default function Recommendations() {
  const { Content } = Layout;

  const [currentPage, setCurrentPage] = useState(1);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [gameToEdit, setGameToEdit] = useState(null);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [filters, setFilters] = useState({
    category: "all",
    price: 50,
    platform: "all",
  });
  const itemsPerPage: number = 12;

  const pageSize = 12;
  const { gameAll, loading } = useGames();
  const startIndex: number = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedGames = gameAll.slice(startIndex, endIndex);
  const { user } = useUser();
  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <Loading />;
  }
  const handleDeleteItem = async () => {
    if (selectedGameId) {
      try {
        await deleteGame(selectedGameId);
        message.success("Se eliminó correctamente", 3);
        setDeleteModalVisible(false);
      } catch (error) {
        message.error("No se pudo eliminar, inténtelo más tarde", 3);
      }
    }
  };


  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8">
          <div className="flex flex-row p-8">
            <div className="flex flex-col items-center">
              <Filters />
            </div>
            <div className="">
              <h1 className="text-center font-semibold text-4xl">
                Recommendations games
              </h1>
              <div className="l mt-16">
                <div className="flex justify-center space-x-8 2xl:mr-60 2xl:ml-60">
                  <Row
                    gutter={[16, 16]}
                    className="md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 "
                  >
                    {displayedGames.map((game: any, index) => (
                      <Col
                        className="w-full sm:mx-2 md:mx-2 lg:mx-4 2xl:mx-4 "
                        key={index}
                      >
                        {/* @ts-ignore */}
                        {user && user.rol === "ADMIN" ? (
                          <div className=" border border-gray-900 shadow-md rounded-xl dark:bg-gray-900 h-[26rem] sm:w-full w-full">
                            <div className="card-home card2">
                              <Link href={`/game-details/${game.id}`}>
                                <img
                                  alt={game.nombre ? game.nombre : game.name}
                                  src={
                                    game?.imagen
                                      ? game?.imagen
                                      : game?.imageUrl ||
                                        "https://pixel-palace.netlify.app/logo.png"
                                  }
                                  className="bg-gray-900 w-full h-48 object-cover rounded-t-xl border border-gray-300"
                                />
                                <div className="p-4">
                                  <h2 className="text-xl font-semibold mb-2">
                                  {game.nombre ? game.nombre : game.name}
                                  </h2>
                                  <p className="text-gray-100">
                                    {game.categoria
                                      ? game.categoria
                                      : game.categories}
                                  </p>
                                  <p className="text-gray-100">
                                    {game.fecha_lanzamiento}
                                  </p>
                                  <p className="text-red-500 font-semibold mt-2">
                                    ${game.precio ? game.precio : game.price}
                                  </p>
                                </div>
                              </Link>
                            </div>

                            <div className="flex space-x-4 mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 26 26"
                                className="ml-4 cursor-pointer text-custom_red"
                                onClick={() => {
                                  setSelectedGameId(game.id);
                                  setDeleteModalVisible(true);
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                                className="ml-4 cursor-pointer"
                                onClick={() => {
                                  setGameToEdit(game.id);
                                  setEditModalVisible(true);
                                }}
                              >
                                <g
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                >
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        ) : (
                          <div className="card-home card2 border border-gray-900 shadow-md rounded-xl dark:bg-gray-900 h-[22rem] sm:w-full w-full">
                            <Link href={`/game-details/${game.id}`}>
                              <img
                                alt={game.nombre ? game.nombre : game.name}
                                src={
                                  game?.imagen
                                    ? game?.imagen
                                    : game?.imageUrl ||
                                      "https://pixel-palace.netlify.app/logo.png"
                                }
                                className="bg-gray-900 w-full h-48 object-cover rounded-t-xl border border-gray-300"
                              />
                              <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                  {game.nombre}
                                </h2>
                                <p className="text-gray-100">
                                  {game.categoria
                                    ? game.categoria
                                    : game.categories}
                                </p>
                                <p className="text-gray-100">
                                  {game.fecha_lanzamiento}
                                </p>
                                <p className="text-red-500 font-semibold mt-2">
                                  ${game.precio ? game.precio : game.price}
                                </p>
                              </div>
                            </Link>
                          </div>
                        )}
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              <Pagination
                current={currentPage}
                total={gameAll.length}
                pageSize={pageSize}
                onChange={onChangePage}
                showSizeChanger={false}
                className="text-center mt-8"
              />
              {/* <EditGameModal
        game={gameToEdit}
        visible={editModalVisible}
        onOk={handleUpdateGame}
        onCancel={() => {
          setGameToEdit(null);
          setEditModalVisible(false);
        }}
      /> */}

              <ModalConfirm
                open={isDeleteModalVisible}
                onCancel={() => {
                  setDeleteModalVisible(false);
                  setSelectedGameId(null);
                }}
                onAction={handleDeleteItem}
                nameItem={"confirm"}
                titleConfirm="Confirmar eliminación"
                descriptionConfirm="¿Estás seguro de que deseas eliminar este elemento?"
              />
            </div>
          </div>
        </Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}
