"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getGameDetails } from "../services/firebase";
import HeaderLayout from "../components/Header";
import FooterLayout from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Layout } from "antd";
import { Game } from "../types/types";
function GameDetails() {
  const { Content, Footer } = Layout;
  const [gameDetails, setGameDetails] = useState(null);

  // const router = useRouter();
  // const { id } = router.query ?? {};
//   const [game, setGame] = useState<Game | null>(null);
// console.log(game, 'games');

//   useEffect(() => {
//     if (!id) {
//       getGameDetails(id).then((result) => {
//         console.log(result);
        
//         if (result.success) {
//           setGame(result.game);
//         } else {
//           console.error("Error al obtener los detalles del juego:", result.error);
//         }
//       });
//     }
//   }, [id]);

  // if (!game) {
  //   return <Loading/>
  // }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout className="w-full min-h-screen dark:bg-gray-700 bg-white">
        <HeaderLayout />
        <Content className="p-4 mt-8"></Content>
        <FooterLayout />
      </Layout>
    </ThemeProvider>
  );
}

export default GameDetails;
