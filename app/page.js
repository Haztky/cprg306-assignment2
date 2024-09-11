import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev assignment</h1>
      <p>Sart of Web Dev</p>
      <li>
        <Link href='/assignment-2'>Assignment 2</Link>
      </li>
      <li>
        <Link href='/assignment-3'>Assignment 3</Link>
      </li>
    </div>
  );
}

