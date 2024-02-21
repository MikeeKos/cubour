import UniversalFlashingBlock from "./universal-flashing-block";

function FastFlashingBlock(props) {
  return <UniversalFlashingBlock {...props} intervalTime={1000}></UniversalFlashingBlock>;
}

export default FastFlashingBlock;