import React from 'react';

function App() {
  const handleButtonClick = (url) => {
    try {
      window.open(url, '_blank');
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  const discussions = [
    { id: 1, title: "Discussion 1", slidesUrl: "https://beelauuu.github.io/slides/docs/13024" },
    { id: 2, title: "Discussion 2", slidesUrl: "https://beelauuu.github.io/slides/docs/20124", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTwo.zip" },
    { id: 3, title: "Discussion 3", slidesUrl: "https://beelauuu.github.io/slides/docs/20624", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionThree.zip" },
    { id: 4, title: "Discussion 4", slidesUrl: "https://beelauuu.github.io/slides/docs/20824" },
    { id: 5, title: "Discussion 5", slidesUrl: "https://beelauuu.github.io/slides/docs/21424", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionFive.zip" },
    { id: 6, title: "Discussion 6", slidesUrl: "https://beelauuu.github.io/slides/docs/21524", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionSix.zip" },
    { id: 7, title: "Discussion 7", slidesUrl: "https://beelauuu.github.io/slides/docs/22024", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionSeven.zip" },
    { id: 8, title: "Discussion 8", slidesUrl: "https://beelauuu.github.io/slides/docs/22224" },
    { id: 9, title: "Discussion 9", slidesUrl: "https://beelauuu.github.io/slides/docs/22724", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionNine.zip" },
    { id: 10, title: "Discussion 10", slidesUrl: "https://beelauuu.github.io/slides/docs/22924", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTen.zip" },
    { id: 11, title: "Discussion 11", slidesUrl: "https://beelauuu.github.io/slides/docs/30524" },
    { id: 12, title: "Discussion 12", slidesUrl: "https://beelauuu.github.io/slides/docs/30724", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTwelve.zip" },
    { id: 13, title: "Discussion 13", slidesUrl: "https://beelauuu.github.io/slides/docs/31224", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionThirteenAndFourteen.zip" },
    { id: 14, title: "Discussion 14", slidesUrl: "https://beelauuu.github.io/slides/docs/31424", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionThirteenAndFourteen.zip" },
    { id: 15, title: "Discussion 15", slidesUrl: "https://beelauuu.github.io/slides/docs/32624", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionFifteen.zip" },
    { id: 16, title: "Discussion 16", slidesUrl: "https://beelauuu.github.io/slides/docs/32824"},
    { id: 17, title: "Discussion 17", slidesUrl: "https://beelauuu.github.io/slides/docs/40224", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionSeventeen.zip" },
    { id: 18, title: "Discussion 18", slidesUrl: "https://beelauuu.github.io/slides/docs/40424" },
    { id: 19, title: "Discussion 19", slidesUrl: "https://beelauuu.github.io/slides/docs/40924" },
    { id: 20, title: "Discussion 20", slidesUrl: "https://beelauuu.github.io/slides/docs/41124" },
    { id: 21, title: "Discussion 21", slidesUrl: "https://beelauuu.github.io/slides/docs/41624" },
    { id: 22, title: "Discussion 22", slidesUrl: "https://beelauuu.github.io/slides/docs/41824" },
    { id: 23, title: "Discussion 23", slidesUrl: "https://beelauuu.github.io/slides/docs/42324", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTwentyThree.zip" },
    { id: 24, title: "Discussion 24", slidesUrl: "https://beelauuu.github.io/slides/docs/42524"},
    { id: 25, title: "Discussion 25", slidesUrl: "https://beelauuu.github.io/slides/docs/43024" },
    { id: 26, title: "Discussion 26", slidesUrl: "https://beelauuu.github.io/slides/docs/50224" },
    { id: 27, title: "Discussion 27", slidesUrl: "https://beelauuu.github.io/slides/docs/50724" },
    { id: 28, title: "Discussion 28", slidesUrl: "https://beelauuu.github.io/slides/docs/50924", codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionFinal.zip" },
  ]
  return (
    <div className="container mx-auto p-8 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center underline">Brian's Archive (CMSC131; Spring '24)</h1>
      <div className="wrapper-grid text-center">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="wrapper mt-4">
            <p className="inline-block font-semibold">{discussion.title}:</p>
            <button
              type="button"
              onClick={() => handleButtonClick(discussion.slidesUrl)}
              className="ml-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Slides
            </button>
            {discussion.codeUrl && (
              <button
                type="button"
                onClick={() => handleButtonClick(discussion.codeUrl)}
                className="ml-4 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Code
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
