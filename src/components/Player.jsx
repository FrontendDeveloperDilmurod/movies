import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import Loading from "./Loading";

function Player() {
    const { id } = useParams(); // URL parametridan `id` ni olamiz
    const [data, setData] = useState(null); // Dastlab `null` deb belgilanadi
    const navigate = useNavigate();

    // Orqaga qaytish funksiyasi
    const goBack = () => {
        navigate(-1); // Bir bosqich orqaga navigatsiya qilish
    };

    // API so‘rovi uchun parametrlar
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RhNWMzMGJiYjcyM2MyOTUwN2Y1YjNjMGUxZDc4YiIsIm5iZiI6MTczMjUyNjUyMy4xNDIwMjI4LCJzdWIiOiI2NzQxNmZlZDYzNzBlY2FkM2ZmZmM1MDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tI4PKJQRSdEsN1MLY1cT4f6EYUPpO4SN2Cqhl0WuQ8o",
        },
    };

    // Ma’lumotni yuklash
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                // Agar ma’lumot mavjud bo‘lsa, birinchi elementni olish
                if (res.results && res.results.length > 0) {
                    setData(res.results[0]);
                }
            })
            .catch((err) => console.error(err));
    }, [id]); // `id` o‘zgarganda so‘rovni qayta ishga tushirish

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 space-y-6 bg-black">
            {/* Orqaga qaytish tugmasi */}
            <button
                onClick={goBack}
                className="absolute p-3 transition-all duration-300 ease-out bg-transparent rounded-full top-6 left-6 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
                <img src={back_arrow_icon} alt="Back" className="w-8 h-8 text-white" />
            </button>

            {/* Yuklanish jarayoni */}
            {!data ? (
                <Loading />
            ) : (
                <>
                    {/* YouTube video */}
                    <div className="w-full max-w-4xl overflow-hidden bg-black rounded-lg shadow-lg">
                        <iframe
                            width="100%"
                            height="450"
                            src={`https://www.youtube.com/embed/${data.key}`}
                            title={data.name || "Video"}
                            allowFullScreen
                            frameBorder="0"
                            className="rounded-t-lg"
                        ></iframe>
                    </div>

                    {/* Ma’lumotlar */}
                    <div className="flex items-center justify-between gap-12 mt-4">
                        <h4 className="mt-2 text-lg text-gray-400">
                            {data.published_at ? data.published_at.slice(0, 10) : "Sana mavjud emas"}
                        </h4>
                        <h4 className="mt-2 text-xl font-semibold text-white">
                            {data.name || "Noma’lum video"}
                        </h4>
                        <h4 className="mt-2 text-lg text-gray-300">{data.type || "Turi noma’lum"}</h4>
                    </div>
                </>
            )}
        </div>
    );
}

export default Player;
