import SignInForm from './SignInForm';

const App = () => {
const handleSubmit = (email: string, password: string) => {
};

return (
<div>
<SignInForm onSubmit={handleSubmit} />
</div>
);
};

export default App;