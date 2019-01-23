import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.basic{
   export class Voter extends Participant {
      voterId: string;
      Name: string;
      isVoted: boolean;
   }
   export class Party extends Asset {
      name: string;
      vote: number;
   }
   export class Vote extends Transaction {
      voter: Voter;
      party: Party;
   }
// }
