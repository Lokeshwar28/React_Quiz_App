import logoimage from "../assets/quiz-logo.png";

export function Header() {
  return (
    <header>
      <img src={logoimage} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
