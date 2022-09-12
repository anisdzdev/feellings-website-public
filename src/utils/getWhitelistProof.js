import whitelist from './whitelist.json';

import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';

import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;

const getWhitelistProof = async (provider, address) => {
    if (whitelist.length < 1) {
        return 0;
    }
    const regex = new RegExp(whitelist.join("|"), "i");
    const ens = await provider.lookupAddress(address);
    let foundByEns = 0;
    if (ens != null) {
        if (regex.test(ens)) {
            foundByEns = 1;
        } else if (regex.test(address)) {
            foundByEns = 0;
        } else {
            return 0;
        }
    } else {
        if (!regex.test(address)) return 0;
    }

    // Build the Merkle Tree
    const leafNodes = whitelist.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
    return foundByEns === 1 ? merkleTree.getHexProof(keccak256(ens)) : merkleTree.getHexProof(keccak256(address));
}

export default getWhitelistProof;