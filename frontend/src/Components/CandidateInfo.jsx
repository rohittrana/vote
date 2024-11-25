import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const ABI = [ /* Add your contract ABI here */ ];

const CandidateInfo = () => {
  const [candidates, setCandidates] = useState([]);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    const initBlockchain = async () => {
      if (window.ethereum) {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(_provider);

        const _contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, _provider);
        setContract(_contract);

        // Fetch candidates from the smart contract
        const candidateCount = await _contract.candidatesCount();
        let _candidates = [];
        for (let i = 1; i <= candidateCount; i++) {
          const candidate = await _contract.candidates(i);
          _candidates.push({
            id: candidate.id.toNumber(),
            name: candidate.name,
            voteCount: candidate.voteCount.toNumber(),
          });
        }
        setCandidates(_candidates);
      } else {
        toast.error("Please install MetaMask!");
      }
    };
    initBlockchain();
  }, []);

  const handleVote = async (id) => {
    if (!contract) return;

    try {
      const signer = provider.getSigner();
      const contractWithSigner = contract.connect(signer);
      await contractWithSigner.vote(id);
      toast.success("Vote cast successfully!");

      // Update the candidates list after voting
      const updatedCandidates = candidates.map(candidate =>
        candidate.id === id
          ? { ...candidate, voteCount: candidate.voteCount + 1 }
          : candidate
      );
      setCandidates(updatedCandidates);
    } catch (err) {
      toast.error("Error casting vote.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id} className="mb-2">
            <div className="p-4 border rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-semibold">{candidate.name}</h3>
              <p>Votes: {candidate.voteCount}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleVote(candidate.id)}
              >
                Vote
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default CandidateInfo;
