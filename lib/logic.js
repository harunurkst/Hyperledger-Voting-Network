/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.example.basic.Vote} vote The sample transaction instance.
 * @transaction
 */
async function submitVote(vote) {  // eslint-disable-line no-unused-vars
    if (!vote.voter.isVoted){
        vote.voter.isVoted = true;
        vote.party.vote +=1;
  
        // Get the asset registry for the asset.
        const assetRegistry = await getAssetRegistry('org.example.basic.Party');
        // Update the asset in the asset registry.
        await assetRegistry.update(vote.party);
  
        const participantRegistry = await getParticipantRegistry('org.example.basic.Voter');
        // Update the asset in the asset registry.
        await participantRegistry.update(vote.voter);
    }
    else {
         throw new Error('This voter Already voted');
    }
    
      
  }
