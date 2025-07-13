import { useMemo, memo } from 'react';
import type { Language } from '../utils/language';
import { getTop5PopularLanguages } from '../utils/languageInfo';

interface PopularityRankingProps {
  languages: Language[];
}

const PopularityRanking = memo(function PopularityRanking({ languages }: PopularityRankingProps) {
  const top5Languages = useMemo(() => {
    // ดึง 5 อันดับมา (เรียงถูกตามคะแนนแล้ว)
    const tops = getTop5PopularLanguages();

    // รวมข้อมูลเพิ่มเติมจาก languages เช่น logo
    return tops.map(top => {
      const langData = languages.find(l => l.slug === top.slug);
      return {
        ...top,
        logo: langData?.logo ?? '', // fallback ถ้าไม่มี logo
      };
    });
  }, [languages]);

  const rankColors = [
    'from-yellow-400 to-yellow-600', // 🥇 Gold
    'from-gray-300 to-gray-500',     // 🥈 Silver
    'from-amber-600 to-amber-800',   // 🥉 Bronze
    'from-blue-400 to-blue-600',     // 4th
    'from-purple-400 to-purple-600'  // 5th
  ];

  const rankEmojis = ['🥇', '🥈', '🥉', '🏅', '🎖️'];

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl mb-6 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
          <span className="text-4xl">🏆</span>
          อันดับความนิยม
          <span className="text-4xl">🏆</span>
        </h2>
        <p className="text-gray-600 text-lg">
          ภาษาโปรแกรมมิ่งที่ได้รับความนิยมมากที่สุด
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {top5Languages.map((lang, index) => (
          <div
            key={lang.id}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-100 hover:border-gray-300"
          >
            {/* Rank Badge */}
            <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${rankColors[index]} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
              #{index + 1}
            </div>

            {/* Rank Emoji */}
            <div className="text-center mb-4">
              <span className="text-5xl">{rankEmojis[index]}</span>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2 group-hover:bg-gray-100 transition-colors">
                <img
                  src={import.meta.env.BASE_URL + 'images/' + lang.logo}
                  width={60}
                  height={60}
                  className="language-logo logo-animate transition-transform group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  alt={`${lang.name} logo`}
                />
              </div>
            </div>

            {/* Language Name */}
            <div className="text-center mb-4">
              <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {lang.name}
              </h3>
            </div>

            {/* Popularity Score */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl shadow-md">
                <p className="text-sm font-semibold mb-1">คะแนนความนิยม</p>
                <p className="text-1xl font-bold">{lang.popularityScore}%</p>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
          <span className="text-2xl">⭐</span>
          <span className="text-gray-600 font-medium">
            อัปเดตข้อมูลล่าสุด
          </span>
          <span className="text-2xl">⭐</span>
        </div>
      </div>
    </div>
  );
});

export default PopularityRanking;
