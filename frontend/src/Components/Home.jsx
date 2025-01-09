import React, { useState, useEffect } from 'react';
import Img1 from "../assets/img1.png";
import Party1 from "../assets/party1.png";
import Party2 from "../assets/party2.png";
import Party3 from "../assets/party3.png";
import Party4 from "../assets/party4.png";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar/NavBar";
import { connectToBlockchain, getCandidates, resultStatus } from '../../contracts/Elections';

// Party logos for display
const partyLogos = {
  Party1: Party1,
  Party2: Party2,
  Party3: Party3,
  Party4: Party4,
};

const Home = () => {
  const [resultsDeclared, setResultsDeclared] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState('');

  // Fetch results and candidates when the component mounts
  useEffect(() => {
    const fetchResults = async () => {
      try {
        await connectToBlockchain();
        const declared = await resultStatus();
        setResultsDeclared(declared);

        if (declared) {
          const fetchedCandidates = await getCandidates();
          const sortedCandidates = fetchedCandidates.sort((a, b) => {
            return Number(b.candidate_voteCount.toString()) - Number(a.candidate_voteCount.toString());
          });
          setCandidates(sortedCandidates);
        }
      } catch (error) {
        console.error("Failed to fetch results:", error);
        setError('Error fetching candidates or election results');
      }
    };

    fetchResults();
  }, []);

  const formatPartyLogo = (partyLogo) => {
    const formattedName = partyLogo.split('.')[0];
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  };

  const Testimonial = ({ message, name }) => (
    <div className="bg-orange-50 p-6 rounded-lg shadow">
      <p className="text-gray-600">{`"${message}"`}</p>
      <h5 className="text-orange-500 font-bold mt-4">- {name}</h5>
    </div>
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-50 min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-[5rem] pb-[2rem]">
        <div className="flex flex-col items-center justify-center gap-10 w-full px-4">
          <img src={Img1} alt="Emblem" className="w-full md:w-[50%] mt-0 animate-fade-in" />
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mt-4">Your Vote Matters!</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl">
            Participate in the most transparent and secure voting system powered by blockchain. Your voice shapes the future!
          </p>
          <Link to="/voterLogin">
            <button className="mt-0 px-4 py-2 md:px-8 md:py-5 bg-orange-500 hover:bg-orange-300 text-white font-bold text-lg rounded-full border-[2px] border-orange-500 hover:text-black transition-transform focus:outline-none animate-bounce">
              VOTE NOW ✅
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Our System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-orange-500 text-4xl mb-4">🔒</span>
              <h3 className="text-lg font-bold text-gray-800">Secure & Transparent</h3>
              <p className="text-gray-600">Powered by blockchain, our system ensures end-to-end encryption and transparency for every vote.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-orange-500 text-4xl mb-4">⚡</span>
              <h3 className="text-lg font-bold text-gray-800">Fast & Reliable</h3>
              <p className="text-gray-600">Experience quick results and error-free processing with our advanced technology.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-orange-500 text-4xl mb-4">🌍</span>
              <h3 className="text-lg font-bold text-gray-800">Global Access</h3>
              <p className="text-gray-600">Vote from anywhere in the world, ensuring everyone’s participation matters.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>Log in securely to the voting portal.</li>
            <li>Select your candidate and cast your vote.</li>
            <li>Monitor live results or wait for final declarations.</li>
          </ol>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial message="This is the most secure voting platform I’ve ever used. Highly recommend it!" name="Ankit Sharma" />
            <Testimonial message="Blockchain-based voting is the future, and this system proves it!" name="Priya Verma" />
            <Testimonial message="Fast, reliable, and transparent – what more could you want?" name="Rahul Nair" />
          </div>
        </div>
      </div>

      {/* Election Results Section */}
      {resultsDeclared && candidates.length > 0 && (
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Election Results</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {candidates.map((candidate, index) => (
              <div key={index} className="w-full sm:w-80 md:w-96 bg-orange-50 border-[3px] border-orange-400 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex flex-col items-center p-4">
                  <h1 className="text-2xl font-bold text-black mb-3">{index === 0 ? 'Winner!' : `Rank ${index + 1}`}</h1>
                  <img
                    src={partyLogos[formatPartyLogo(candidate.candidate_partyLogo)] || ''}
                    alt={`${candidate.candidate_partyName}'s logo`}
                    className="w-24 h-24 mb-3 rounded-xl"
                  />
                  <div className="flex flex-col py-3 items-center mt-4 bg-orange-200 w-full rounded-xl">
                    <span className="text-sm font-semibold text-gray-700">Voters Count</span>
                    <span className="text-4xl font-semibold text-orange-700">{candidate.candidate_voteCount.toString()}</span>
                    <h5 className="mb-1 text-lg pt-3 font-medium text-green-600">{candidate.candidate_partyName}</h5>
                    <span className="text-sm font-semibold text-gray-700">{candidate.candidate_name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
};

export default Home;
